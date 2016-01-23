class User < ActiveRecord::Base
  validates :name, presence: true
  acts_as_follower
  acts_as_followable
  acts_as_liker
  acts_as_mentionable
end
