class User < ActiveRecord::Base
  validates_presence_of :uid, :handle
  validates :name, presence: true

  acts_as_follower
  acts_as_followable
  acts_as_liker

  has_many :posts
  has_many :comments

end
