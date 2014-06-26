# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Photo.delete_all
srcImage = File.open 'public/src.jpg'
(1..10).each do |i|
  photo = Photo.create name: "Photo ##{i}"
  photo.image = srcImage
  photo.save
end