class PostsController < ApplicationController
    # GET /posts
    # GET /posts.json

    before_filter :authenticate_user!, only: [:create, :new, :edit, :destroy]
    def index
      @posts = current_user.posts

      respond_to do |format|
        format.json { render json: @posts }
      end
    end

    # GET /posts/1
    # GET /posts/1.json
    def show
      @comment = Comment.new
      @post = Post.find(params[:id])
      @comments = @post.comments

      respond_to do |format|
        format.json { render json: @post }
      end
    end

    # GET /posts/new
    # GET /posts/new.json
    def new
      @post = Post.new

      respond_to do |format|
        format.json { render json: @post }
      end
    end

    # GET /posts/1/edit
    def edit
      @post = Post.find(params[:id])
    end

    # POST /posts
    # POST /posts.json
    def create
      @post = Post.new(params[:post])
      @post.user = current_user

      respond_to do |format|
        if @post.save
          format.json { render json: @post, status: :created, location: @post }
        else
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      end
    end

    # PUT /posts/1
    # PUT /posts/1.json
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

    # DELETE /posts/1
    # DELETE /posts/1.json
    def destroy
      @post = Post.find(params[:id])
      @post.destroy

      respond_to do |format|
        format.json { head :no_content }
      end
    end
  end
end
