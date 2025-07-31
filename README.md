## Imran's Blog (Create AI-powered blogs effortlessly)

#### blogging website made with reactjs, express and mongdb. create blog content with AI.

#### Includes complete user management,ai and razorpay integrations
## Tech Stack

**Client:** React

**Server:** Node, Express

**DB:** MongoDb

**Deployment:** Vercel

### Other Stacks available

If you want a more progressive backend checkout the Nestjs + React Repo

## Author

https://github.com/shaikimran03


## About
 Welcome to Imran's Blog! This blog was created by Shaik imran
 as a blog platform for user's to publish retail blogs help retail websites maintain fresh and engaging blog content.
 and share  thoughts and ideas with the world. 
 The platform features a React-based interface for easy content management and editing. 
 A Node.js backend supports saving and scheduling posts for automated publishingSahand is a passionate developer who loves to write about
 technology, coding, and everything in between.
 On this blog platform, you'll find weekly articles and tutorials on topics
 such as  covering product insights, shopping advice, and market trends, web development, software engineering, and programming
languages. Imran is always learning and exploring new
technologies, so be sure to check back often for new content!
Imran's Blog is a place for everyone, whether you're a beginner
or an experienced developer. We believe that sharing knowledge
and experiences is the best way to learn and grow.
Imran encourages you to leave comments, ask questions, and share
your own experiences with the community.If you have any questions or suggestions for future articles,
please feel free to reach out to us. You can contact us through
the contact form on our website or by sending us an email.
We love hearing from our readers and appreciate your feedback!
Thank you for visiting Imran's Blog! We hope you find our
content helpful and inspiring. Don't forget to subscribe to our
newsletter to stay updated on the latest articles and tutorials.
You can also follow us on social media to join the conversation
and connect with other readers.

Complete user management lets you manage your profile details, reset passwords and more. Besides creating new posts user get rewards point which later can be redeem to ai credits. User also gets rewards for liking and commenting on post.

Purchase Ai credits with seemless payment through razorpay payment gateway.

_Earn rewards_
|Action | Rewards |
|-------|---------|
| 1 🗎 Blog post | 10 🪙 rewards|
| 1 ❤️ Like | 1 🪙 reward|
| 1 💬 comment | 5 🪙 reward |

_Redeem Rewards to AI Credits_
| Rewards |Redeem to => | AI credits |
|--------|--------|------------|
| 100 🪙 | 100 👉🏻| 100 💳|

_Buy AI Credits_
| Price (Rs) | AI Credits |
|-------|------------|
| 100 💸 | 100 💳 |

## Packages Used

**Frontend:**

| Packages           | npm links                                           |
| ------------------ | --------------------------------------------------- |
| axios              | https://www.npmjs.com/package/axios                 |
| joi                | https://www.npmjs.com/package/joi                   |
| jwt-decode         | https://www.npmjs.com/package/jwt-decode            |
| react-confetti     | https://www.npmjs.com/package/react-confetti        |
| react-icons        | https://www.npmjs.com/package/react-icons           |
| react-router-dom   | https://www.npmjs.com/package/react-router-dom      |

**Backend:**
|Packages | npm links |
|---------|-----------|
|express|https://www.npmjs.com/package/express|
|mongodb|https://www.npmjs.com/package/mongodb|
|razorpay|https://www.npmjs.com/package/razorpay|
|cloudinary|https://www.npmjs.com/package/cloudinary|
|mongoose|https://www.npmjs.com/package/mongoose|
|multer|https://www.npmjs.com/package/multer|
|nodemailer|https://www.npmjs.com/package/nodemailer|
|multer-storage-cloudinary|https://www.npmjs.com/package/multer-storage-cloudinary|
|jsonwebtoken|https://www.npmjs.com/package/jsonwebtoken|
|joi|https://www.npmjs.com/package/joi|
|bcryptjs|https://www.npmjs.com/package/bcryptjs|

## Installation

#### Clone / fork the repo

```bash
  git clone https://github.com/shaikimran03/Retail-Blog-with-AI
```

#### Frontend (cd frontend)

```bash
  npm install
```

#### Backend (cd backend)

```bash
  npm install
```

#### Set your .env variable key and value

_for backend_

```code
PORT=5000
MONGO_URI=''
VITE_API_BASE_URL='/api'
SUPER_ADMIN=''
NODE_MAILER_EMAIL=''
NODE_MAILER_PASSWORD=''
APP_TOKEN_NAME=''
CLOUDINARY_CLOUD_NAME=''
CLOUDINARY_API_KEY=''
CLOUDINARY_API_SECRET=''
CLOUDINARY_URL=''
VITE_CLOUDINARY_PRESET=''
RAZORPAY_KEY_ID=''
RAZORPAY_KEY_SECRET=''
```

_for frontend_

```code
VITE_API_BASE_URL='http://localhost:5000/api'
NODE_ENV=development
VITE_CLOUDINARY_UPLOAD_URL=''
VITE_CLOUDINARY_PRESET=''
VITE_GEMINI_API_KEY=''

```

## Run Locally

Start the server

```bash
  npm run server
```

Start the client

```bash
npm run dev
```

