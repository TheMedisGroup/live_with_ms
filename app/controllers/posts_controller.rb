class PostsController < ApplicationController

  def index
    @posts = current_user.posts(created_at: :desc)

    respond_to do |format|
      format.json { render json: @posts }
    end
  end

  def show
    @comment = Comment.new
    @post = Post.find(params[:id])
    @comments = @post.comments

    respond_to do |format|
      format.json { render json: @post }
    end
  end

  def new
    @post = Post.new

    respond_to do |format|
      format.json { render json: @post }
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(params[:post])
    @post.user = current_user

    respond_to do |format|
      if @post.save
        format.json { render json: @post, status: :created, location: @post }
      else
        format.json @post.errors, status: :unprocessable_entity
      end
    end
  end

  def update
    @post = Post.find(params[:id])

    respond_to do |format|
      if @post.update_attributes(params[:post])
        format.json { head :no_content }
      else
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    respond_to do |format|
      format.json { head :no_content }
    end
  end
end
