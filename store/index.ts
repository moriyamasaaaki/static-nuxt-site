export const INITIAL_DATA = {
  posts: [
    {
      _id: '1',
      title: 'タイトル1',
      subtitle: 'サブタイトル1',
      createdAt: new Date(),
      isRead: false,
      content: '僕はNuxt.jsを学び始めたばかりです。まだまだわからないことだらけです。'
    },
    {
      _id: '2',
      title: 'タイトル2',
      subtitle: 'サブタイトル2',
      createdAt: new Date(),
      isRead: true,
      content: '僕はAngularが大好きです。そしてGoogleも好きです。'
    }
  ]
}
