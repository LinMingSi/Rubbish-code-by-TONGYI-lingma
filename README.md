# Excuse Dev 项目

## 项目介绍
Excuse Dev 是一个用于提供借口的网站，用户可以通过API获取、创建、更新和删除借口。

## 技术栈
- **前端**: React.js, Ant Design, Redux, React Router
- **后端**: Express.js, MongoDB, Mongoose
- **部署**: Netlify/Vercel (前端), Heroku/AWS (后端)
## 项目目录
### excuse-dev/
#### ├── components/
#### │   ├── ExcuseList.js
#### ├── controllers/
#### │   └── excuseController.js
#### ├── models/
#### │   └── Excuse.js
#### ├── routes/
#### │   └── excuseRoutes.js
#### ├── public/
#### │   └── index.html
#### ├── README.md
#### └── package.json
#### └── server.js

## 安装步骤

### 前端安装
1. 进入前端项目目录
   ```bash
   cd excuse-dev
   ```
2. 安装依赖
   ```bash
   npm install
   ```
3. 启动开发服务器
   ```bash
   npm start
   ```

### 后端安装
1. 进入后端项目目录
   ```bash
   cd excuse-dev
   ```
2. 安装依赖
   ```bash
   npm install
   ```
3. 启动开发服务器
   ```bash
   npm start
   ```

## 使用说明

### 前端使用
- 访问 `http://localhost:3000` 查看借口列表。

### 后端API文档

#### 获取所有借口
- **URL**: `/api/excuses`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "_id": "64b1f1b1f1b1f1b1f1b1f1b1",
      "content": "这是一个借口",
      "createdAt": "2023-07-18T00:00:00.000Z"
    }
  ]
  ```

#### 创建一个新的借口
- **URL**: `/api/excuses`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "content": "这是一个新的借口"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "64b1f1b1f1b1f1b1f1b1f1b2",
    "content": "这是一个新的借口",
    "createdAt": "2023-07-18T00:00:00.000Z"
  }
  ```

#### 根据ID获取借口
- **URL**: `/api/excuses/:id`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "_id": "64b1f1b1f1b1f1b1f1b1f1b1",
    "content": "这是一个借口",
    "createdAt": "2023-07-18T00:00:00.000Z"
  }
  ```

#### 更新借口
- **URL**: `/api/excuses/:id`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "content": "更新后的借口"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "64b1f1b1f1b1f1b1f1b1f1b1",
    "content": "更新后的借口",
    "createdAt": "2023-07-18T00:00:00.000Z"
  }
  ```

#### 删除借口
- **URL**: `/api/excuses/:id`
- **Method**: `DELETE`
- **Response**:
  ```json
  {
    "message": "借口已删除"
  }
  ```

## 部署
### 前端部署
- 使用 Netlify 或 Vercel 进行前端部署。

### 后端部署
- 使用 Heroku 或 AWS 进行后端部署。