class User < ApplicationRecord
  validates :username, :email, :avatar, :password_digest,
            :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, format: {
    with: /\A\w*@\w*.\w*\z/,
    message: "must be of form 'example@website.domain'"
  }
  validates :username, format: {
    with: /\A[^@]*\z/,
    message: "cannot contain special characters"
  }
  after_initialize :ensure_session_token

  attr_reader :password

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(userIdentifier, password)
    @user = User.find_by(username: userIdentifier)
    #TODO: Sign in by email also??
    # Check for username and emails being unique?
    unless @user
      @user = User.find_by(email: userIdentifier)
    end

    if @user && @user.is_password?(password)
      return @user
    end

    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end
end
