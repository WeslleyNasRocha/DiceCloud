import SimpleSchema from "simpl-schema";

let Bundles = new Mongo.Collection("bundle");

let attributeSchema = new SimpleSchema({
  name: String,
  variableName: String,
  baseValue: String,
  type: String,
});

let skillSchema = new SimpleSchema({
  name: String,
  variableName: String,
  ability: String,
  type: String,
});

let damageMultiplierSchema = new SimpleSchema({
  name: String,
  variableName: String,
});

let effectSchema = new SimpleSchema({
  name: String,
  stat: String,
  operation: {type: String},
  calculation: {type: String, optional: true},
  value: {type: Number, optional: true}
});

let itemSchema = new SimpleSchema({
  name: String,
  plural:		{type: String, optional: true,},
  description: {type: String, optional: true,},
  quantity:	{type: SimpleSchema.Integer, min: 0,},
  weight:		{type: Number, min: 0,},
  value:		{type: Number, min: 0,},
  requiresAttunement: {type: Boolean, optional: true},
  settings: {type: Object, optional: true},
  "settings.showIncrement": {type: Boolean, optional: true},
});

let containerSchema = new SimpleSchema({
  name: String,
	isCarried:  Boolean,
	weight:		{type: Number, min: 0},
	value:		{type: Number, min: 0},
	description:{type: String, optional: true},
  items: Array,
  "items.$": itemSchema,
});

let featureSchema = new SimpleSchema({
  name:          String,
  description:   {type: String, optional: true},
  uses:          {type: String, optional: true},
  alwaysEnabled: {type: Boolean, defaultValue: true},
  effects:       Array,
  "effects.$":   effectSchema,
});

let bundleSchema = new SimpleSchema({
  attributes: Array,
  "attributes.$": attributeSchema,
  skills: Array,
  "skills.$": skillSchema,
  damageMultipliers: Array,
  "damageMultipliers.$": damageMultiplierSchema,
  effects: Array,
  "effects.$": effectSchema,
  containers: Array,
  "containers.$": containerSchema,
});

export default Bundles;
