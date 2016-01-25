class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.trackable
      t.timestamps null: true

    end
  end
end
