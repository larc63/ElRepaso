FROM test-runner AS base

# Set the working directory inside the container
WORKDIR /app

# # Copy your local source code into the container's working directory
COPY CMakeLists.txt .
COPY include ./include
COPY src ./src
COPY tests ./tests

# Build your project
RUN mkdir -p build && cd build && cmake .. && cmake --build .

# Development stage -- make hot-reloading-re-runing on source change
FROM base AS development

COPY *.json .
RUN npm ci

COPY gulpfile.js .

# Runner stage
# A smaller, cleaner image just to run the tests
FROM debian:bookworm-slim AS runner

# Copy the built test executable from the base stage
# COPY --from=base /app/build/calculator_tests .

# Command to run the test executable when the container starts
CMD ["./build/local_tests"]
