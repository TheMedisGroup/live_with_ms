class Comment < ActiveRecord::Base
  validates_presence_of :comments

  belongs_to :user
  belongs_to :post

  include PublicActivity::Model
  tracked owner: ->(controller, model) { controller && controller.current_user }

  acts_as_likeable
end
