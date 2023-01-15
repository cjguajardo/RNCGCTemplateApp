#!/usr/bin/env python3
import os
import shutil
import sys
from rich import print

# ./build.py --platform=ios
# ./build.py --platform=android
# ./build.py --platform=web
# ./build.py --platform=all

# check if platform is passed
if len(sys.argv) < 2:
    print(
        ':eyes:', '[bold red] no platform passed. Please pass a platform with --platform=ios, --platform=android, --platform=web or --platform=all [/bold red]')
    exit(1)

# get named argument --platform
platform = sys.argv[1].split('=')[1]

# check if platform is valid
if platform not in ['ios', 'android', 'web', 'all']:
    print(
        ':eyes:', '[bold red] invalid platform. Please use ios, android, web or all [/bold red]')
    exit(1)

# check if eas is installed
eas = shutil.which('eas')
if eas is None:
    print(
        ':eyes:', '[bold red] eas is not installed. Please install it with npm install -g eas-cli [/bold red]')
    exit(1)

# check if expo is installed
expo = shutil.which('expo')
if expo is None:
    print(
        ':eyes:', '[bold red] expo is not installed. Please install it with npm install -g expo-cli [/bold red]')
    exit(1)

#  if platform is ios or android
if platform in ['ios', 'android']:
    # execute: eas build --platform (ios/android) --local

    print(':eyes:', f"[bold green] building for {platform} ... [/bold green]")

    # execute eas build
    os.system('eas build --platform ' + platform + ' --local')

    print(':eyes:', '[bold green] build finished [/bold green]')
    print(
        ':eyes:', '[bold green] you can find the apk/ipa in the build folder [/bold green]')

    # send alert message to local notification system
    os.system(
        'notify-send "Build finished" "You can find the apk/ipa in the build folder"')

# if platform is web
elif platform == 'web':
    # execute: expo build:web

    print(':eyes:', '[bold green] building for web ... [/bold green]')
    print(':eyes:', '[bold green] this may take a while [/bold green]')
    print(':eyes:', '[bold green] please wait [/bold green]')
    print(':eyes:', '[bold green] ... [/bold green]')

    # execute expo build:web
    os.system('expo build:web')

    print(':eyes:', '[bold green] build finished [/bold green]')
    print(
        ':eyes:', '[bold green] you can find the web build in the web-build folder [/bold green]')
