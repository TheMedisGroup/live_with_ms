class Comment < ActiveRecord::Base
  acts_as_likeable
  acts_as_mentioner
  belongs_to :user
end
