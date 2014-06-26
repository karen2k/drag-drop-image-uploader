class Photo < ActiveRecord::Base
  has_attached_file :image, :styles => {
    thumb_100: "100x100#",
    thumb_200: "200x200#",
    thumb_300: "300x300#",
    largest_200: Proc.new { |instance| instance.resize_image('largest_200') },
    largest_300: Proc.new { |instance| instance.resize_image('largest_300') },
    largest_300_smallest_200: Proc.new { |instance| instance.resize_image('largest_300_smallest_200') }
  }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def thumb_100
      image.url(:thumb_100)
  end
  def thumb_200
      image.url(:thumb_200)
  end
  def thumb_300
      image.url(:thumb_300)
  end
  def largest_200
      image.url(:largest_200)
  end
  def largest_300
      image.url(:largest_300)
  end
  def largest_300_smallest_200
      image.url(:largest_300_smallest_200)
  end

  # private
  def resize_image(style)
    path = image.queued_for_write[:original].path
    geo = Paperclip::Geometry.from_file(path)

    case style
    when 'largest_200'
      if geo.horizontal?
        '200x100#'
      else
        '100x200#'
      end
    when 'largest_300'
      if geo.horizontal?
        '300x100#'
      else
        '100x300#'
      end
    when 'largest_300_smallest_200'
      if geo.horizontal?
        '300x200#'
      else
        '200x300#'
      end
    end
  end
end
