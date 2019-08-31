#!/usr/bin/env sh
command -v virtualenv >/dev/null 2>&1 || echo "virtualenv is required"

virtualenv -p python3 .venv
source .venv/bin/activate
pip install --process-dependency-links --no-cache-dir -r requirements.txt