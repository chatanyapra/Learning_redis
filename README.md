# Learning Redis 🚀

A hands-on project created to understand and practice **Redis fundamentals** including caching, in-memory data structures, and real-time data handling with Node.js.

---

## 📌 Short Description

This repository focuses on learning how Redis works internally and how it can be integrated with backend applications for performance optimization, caching, and messaging.

---

## 🛠️ Tech Stack

| Category        | Technologies |
| --------------- | ------------ |
| Database        | Redis        |
| Backend Runtime | Node.js      |
| Language        | JavaScript   |
| DevOps          | Docker       |

---

## 📂 Project Goals

* Understand Redis as an **in-memory key-value store**
* Practice Redis data structures like:

  * Strings
  * Lists
  * Sets
  * Hashes
* Implement basic **caching strategies**
* Learn how Redis improves application performance
* Explore Redis usage in real backend workflows

---

## ▶️ How to Run Redis Locally

### Using Docker

```bash
docker run -d -p 6379:6379 --name redis-server redis
```

Check Redis is running:

```bash
docker exec -it redis-server redis-cli
```

---

## ▶️ Run Node Application

```bash
npm install
node index.js
```

---

## 💡 Learnings

* Redis commands and operations
* How caching reduces database load
* Using Redis in real-time backend systems
* Redis integration patterns in Node.js

---
