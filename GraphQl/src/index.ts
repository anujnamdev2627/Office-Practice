import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { log } from "node:console";
import _db from "./_db.ts";

import { typeDefs } from "./schema.ts";
//!Server Setup
const resolvers = {
  Query: {
    games() {
      return _db.games;
    },
    reviews() {
      return _db.reviews;
    },
    authors() {
      return _db.authors;
    },
    review(parent, args, context) {
      return _db.reviews.find((review) => {
        return review.id === args.id;
      });
    },
    author(parent, args, context) {
      return _db.authors.find((author) => {
        return author.id === args.id;
      });
    },
    game(parent, args, context) {
      return _db.games.find((game) => {
        return game.id === args.id;
      });
    },
  },
  Game: {
    reviews(parent) {
      return _db.reviews.filter((rev) => {
        return rev.game_id === parent.id;
      });
    },
  },
  Author: {
    reviews(parent) {
      return _db.reviews.filter((rev) => {
        return rev.author_id === parent.id;
      });
    },
  },
  Review: {
    author(parent) {
      return _db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return _db.games.find((a) => a.id === parent.game_id);
    },
  },
  Mutation:{
    deleteGame(parent,args){
        _db.games=_db.games.filter((game)=>{
            return game.id!==args.id
        })
        return _db.games;
    },
    addGame(parent,args){
        let game={
            ...args.game,
            id:Math.floor(Math.random()*10000).toString()
        }
       _db.games.push(game)
       return game; 
    },
    updateGame(parent,args){
        _db.games=_db.games.map((g)=>{
            if(g.id===args.id){
                return {...g,...args.edits}
            }
            return g
        })
        return _db.games.find((g)=>g.id===args.id)
    }
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`Server is ready at port 3000`);
