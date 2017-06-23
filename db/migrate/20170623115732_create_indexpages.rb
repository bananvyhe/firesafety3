class CreateIndexpages < ActiveRecord::Migration[5.0]
  def change
    create_table :indexpages do |t|
      t.string :name
      t.string :tel
      t.text :message

      t.timestamps
    end
  end
end
