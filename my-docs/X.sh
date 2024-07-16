#!/bin/bash

set -e

GITHUB_REPO="https://github.com/LinusDierheimer/fastfetch.git"
GHPROXY_REPO="https://ghproxy.com/https://github.com/LinusDierheimer/fastfetch.git"

clone_repo() {
    git clone "$1" || {
        echo "GitHub clone failed, retrying with ghproxy..."
        git clone "$GHPROXY_REPO"
    }
}

install_on_debian_ubuntu() {
    sudo apt update
    sudo apt install -y git cmake build-essential
    clone_repo "$GITHUB_REPO"
    cd fastfetch
    mkdir build
    cd build
    cmake ..
    make
    sudo make install
}

install_on_arch() {
    sudo pacman -Syu --needed --noconfirm git base-devel
    clone_repo "https://aur.archlinux.org/fastfetch.git"
    cd fastfetch
    makepkg -si
}

install_on_windows() {
    if ! command -v winget &> /dev/null; then
        echo "winget is not installed. Please install winget first."
        exit 1
    fi
    winget install --id Git.Git -e --source winget
    winget install --id Kitware.CMake -e --source winget
    clone_repo "$GITHUB_REPO"
    cd fastfetch
    mkdir build
    cd build
    cmake ..
    make
}

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    if command -v apt &> /dev/null; then
        install_on_debian_ubuntu
    elif command -v pacman &> /dev/null; then
        install_on_arch
    else
        echo "Unsupported Linux distribution. Please install fastfetch manually."
        exit 1
    fi
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    install_on_windows
else
    echo "Unsupported OS. This script only supports Debian, Ubuntu, Arch Linux, and Windows."
    exit 1
fi

echo "fastfetch installation completed successfully."
