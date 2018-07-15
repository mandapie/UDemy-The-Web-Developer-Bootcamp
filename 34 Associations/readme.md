# Types of Associations
* one:one
* one:many
* many:many

## Embedding Data
User:
{
    _id: 001,
    email: "bob@email.com",
    name: "bob",
    posts: [
        {_id: 123, title: "hi", content: "hello"},
        {_id: 124, title: "ok", content: "bye"}
    ]
}

## Referencing Data
User:
{
    _id: 001,
    email: "bob@email.com",
    name: "bob",
    posts: [
        {_id: 123},
        {_id: 124}
    ]
}
Post:
{
    _id: 123,
    title: "hi",
    content: "hello"
},
{
    _id: 124,
    title: "ok",
    content: "bye"
}

##  Module.exports
* introduce module.exports
* move models into seperate files