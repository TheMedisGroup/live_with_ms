class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments

  include PublicActivity::Model
  tracked owner: ->(controller, model) { controller && controller.current_user }

  acts_as_likeable
end
