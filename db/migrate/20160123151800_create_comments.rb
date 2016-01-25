class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :context
      t.belongs_to :user
      t.belongs_to :post

      t.timestamps :null => true
    end
      add_index :comments, :user_id
      add_index :comments, :post_id
  end
end
