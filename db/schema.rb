# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170525004130) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotation_containers", force: :cascade do |t|
    t.integer  "track_id",    null: false
    t.integer  "start_index", null: false
    t.integer  "end_index",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["track_id", "start_index", "end_index"], name: "annotation_container_index", unique: true, using: :btree
    t.index ["track_id"], name: "index_annotation_containers_on_track_id", using: :btree
  end

  create_table "annotations", force: :cascade do |t|
    t.integer  "annotation_container_id", null: false
    t.integer  "user_id",                 null: false
    t.text     "body",                    null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["annotation_container_id"], name: "index_annotations_on_annotation_container_id", using: :btree
    t.index ["user_id"], name: "index_annotations_on_user_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.string   "body",          null: false
    t.integer  "user_id",       null: false
    t.integer  "annotation_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "tracks", force: :cascade do |t|
    t.string   "title",            null: false
    t.string   "artist",           null: false
    t.integer  "user_id",          null: false
    t.text     "lyrics",           null: false
    t.string   "writers"
    t.string   "producers"
    t.string   "editors"
    t.string   "link"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "art_file_name"
    t.string   "art_content_type"
    t.integer  "art_file_size"
    t.datetime "art_updated_at"
    t.index ["user_id"], name: "index_tracks_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "email",               null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

  create_table "votes", force: :cascade do |t|
    t.integer  "value"
    t.integer  "user_id",       null: false
    t.string   "voteable_type"
    t.integer  "voteable_id",   null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["user_id", "voteable_id", "voteable_type"], name: "index_votes_on_user_id_and_voteable_id_and_voteable_type", unique: true, using: :btree
    t.index ["voteable_type", "voteable_id"], name: "index_votes_on_voteable_type_and_voteable_id", using: :btree
  end

end
