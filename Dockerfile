FROM node:18

# Create workdir
WORKDIR /usr/src/app

# Copy dependencies and install it

COPY package*.json ./

RUN npm install

# Copy source code
COPY . .

EXPOSE 5000
CMD ["node", "src/index.js"]