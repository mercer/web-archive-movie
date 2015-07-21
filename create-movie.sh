#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

#find output -name '*.png' | awk 'BEGIN{ a=0 }{ printf "mv %s output/%04d.png\n", $0, a++ }' | bash

ffmpeg -v info -y -f image2 -r 1 -i ./output/%4d.png -t 00:00:36 -i ./assets/soundtrack.mp3 -c:a copy -shortest -threads 8 -s:v 1920x1080 -vcodec libx264 -preset veryslow -qp 0 -map 0:0 -map 1:0 ./movie2.mkv
#ffmpeg -f image2 -r 1/5 -i ./output/%4d.png -c:v libx264 -pix_fmt yuv420p ./out.mp4
