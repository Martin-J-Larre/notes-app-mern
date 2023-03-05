const { Schema, model } = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const NoteSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    title: {
      type: String,
      require: true,
    },
    Text: {
      type: String,
      require: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

NoteSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketNums",
  start_seq: 100,
});

module.exports = model("Note", NoteSchema);
