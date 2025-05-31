FROM docker.io/node:23 AS base 

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME



# DEV environment to suit devcontainers.

FROM base AS dev

WORKDIR /app

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Astro Dev env 
EXPOSE 4321

COPY package.json .

RUN npm update -g npm && npm install 

COPY . .

ENTRYPOINT [ "npm" ]

CMD ["run", "dev"]
