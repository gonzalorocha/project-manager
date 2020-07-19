const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        trim: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    date: {
        type: Date,
        default: Date.now()
    },
    state: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);
