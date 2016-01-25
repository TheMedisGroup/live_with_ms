class UsersController < ApplicationController
  # GET /users
  # GET /users.json
  def index
    @users = Users.all

    respond_to do |format|
      fortmat.json { render json: @users }
    end
  end

  def show
    @user = User.find(params[:id])
    @activities = PublicActivity::Activity.where(owner_id: @user.id, owner_type: "User")

    respond_to do |format|
      fortmat.json { render json: @users }
    end
  end

  def follow
    @user = User.find(params[:user])
    current_user.follow!(@user)
  end

  def unfollow
    @user = User.find(params[:user])
    current_user.unfollow!(@user)
  end

  def like
    if params[:likeable_type] == "Post"
      @likeable = Post.find(params[:likeable_id])
    else
      @likeable = Comment.find(params[:likeable_id])
    end
    current_user.like!(@likeable)
  end

  def unlike
    if params[:likeable_type] == "Post"
      @likeable = Post.find(params[:likeable_id])
    else
      @likeable = Comment.find(params[:likeable_id])
    end
    current_user.unlike!(@likeable)
  end
end
