const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize){
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                image_1: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                image_2: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                image_3: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                image_4: {
                    type: Sequelize.STRING,
                },
                image_5: {
                    type: Sequelize.STRING,
                },
                title: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                content: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                category: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                server_price: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0,
                },
                user_price: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0,
                },
                views: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0,
                },
                top_post: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
                },
                have_info: {
                  type: Sequelize.BOOLEAN,
                  defaultValue: false,
                },
                likes_num: {
                    type: Sequelize.BIGINT,
                    defaultValue: 0,
                },
                reviews_num: {
                    type: Sequelize.BIGINT,
                    defaultValue: 0,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: 'Post',
                tableName: 'posts',
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }

    static associate(db){
        // db.Post.hasOne(db.Top_post);
        db.Post.hasOne(db.Product_brand);
        db.Post.hasOne(db.Product_name);
        db.Post.hasOne(db.Product_size);
        db.Post.hasMany(db.Like);
        db.Post.hasMany(db.Review);
        db.Post.belongsTo(db.User);
    }
}