class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments

  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100#" }

  include PublicActivity::Model
  tracked owner: ->(controller, model) { controller && controller.current_user }

  acts_as_likeable
end
