class HomeController < ApplicationController
  def index
    @post = Post.new
    followees_ids = current_user.followees(User).pluck(:id)

    # followees_ids << current_user.id
    @activities = PublicActivity::Activity.where(owner_id: followees_ids, owner_type: "User")
  end
end
