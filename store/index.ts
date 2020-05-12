export const state = () => {
  return {
    posts: [
      {
        _id: '1',
        title: 'タイトル１',
        subtitle: 'サブタイトル１',
        createdAt: new Date(),
        isRead: false
      },
      {
        _id: '2',
        title: 'タイトル２',
        subtitle: 'サブタイトル',
        createdAt: new Date(),
        isRead: true
      }
    ]
  }
}
