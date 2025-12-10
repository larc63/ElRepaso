# base runner/development image
# cd into baseImage/ and build with:
# docker build -t test-runner .

# if any more tools are needed, add them here

FROM debian:bookworm-slim

# Install build dependencies 
RUN apt update && apt install -y \
    build-essential \
    libgtest-dev \
    cmake \
    curl

# Install node 22 to be able to do watch/hotreload 
RUN curl -sL https://deb.nodesource.com/setup_22.x  | bash -
RUN apt update && apt install -y nodejs && rm -rf /var/lib/apt/lists/*