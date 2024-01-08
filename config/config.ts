export const config = {
    jwtSecret: process.env.JWT_SECRET || '',
    db: {
      user: process.env.DB_USER || 'myUser',
      password: process.env.DB_PASSWORD || 'password123',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      database: process.env.DB_NAME || 'myDB',
    },
  };
  