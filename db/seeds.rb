20.times do
  Post.create!(
    content: Faker::Lorem.sentence,
  )
end
posts = Post.all

40 times do
  Comment.create!(
    content: Faker::Lorem.sentence,
  )
end
comments = Comment.all
