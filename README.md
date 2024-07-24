## Getting Started

# Clone the project repository to your local machine:
```bash
git clone https://github.com/fuadpro/Notes-App.git
```

# Install project dependencies using npm:
```bash
npm i
```
or
```bash
npm install
```
## Create .env file and enter PORT, JWT Secret
```bash
PORT=3000
JWT_SECRET=
```

## Run Notes APP

First, run the development server:

```bash
npm run dev
```
## Endpoint

Get users
```bash
http://localhost:3000/users
```

Get users by Username
```bash
http://localhost:3000/users/?username=
```

Get users by Id
```bash
http://localhost:3000/users/{id}
```

Post Login users pass
```bash
localhost:3000/auth/login
```




Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.