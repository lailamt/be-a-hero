
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //primary_key

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        
        //referencia a coluna 'ong_id' da coluna 'id' da tabela 'ongs'
        table.foreign('ong_id').references('id').inTable('ongs');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
