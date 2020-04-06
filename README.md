[![Dependency Status](https://img.shields.io/david/7ma7X/hellorusk.net.svg?style=flat)](https://img.shields.io/david/7ma7X/hellorusk.net.svg?style=flat)
[![DevDpendency Status](https://img.shields.io/david/dev/7ma7X/hellorusk.net.svg?style=flat)](https://img.shields.io/david/dev/7ma7X/hellorusk.net.svg?style=flat)

```sh
# serve as http://localhost:3000
npm run dev

# deploy
now

# add new post
npm run post
```

## Feature

- ブログシステムを自作のものから [unix/unix.bio](https://github.com/unix/unix.bio) に移管しました。
- 以前のソースコードは [PastDesign ブランチ](https://github.com/7ma7X/hellorusk.net/tree/PastDesign) にあります。

- 構成
  - Next.js + Now
  - TypeScript & ESLint & Prettier
  - ブログ部分の記述は [MDX](https://mdxjs.com/) を採用

- [Renovate](https://github.com/renovatebot/renovate) によるモジュールの自動更新