const Form = require("../../models/Form");
const Question = require("../../models/Question");

module.exports = async (req, res) => {
  const { name, storeId ,questions } = req.body;

  try {
    let data = {
      name,
      storeId,
      questions: []
    }

    questions.forEach(question => {
        Question.create(question).then(result => {
          data.questions.push(result)
        })
    })

    setTimeout(() => {
      let form;
      (async () => {

        const newForm = await Form.create(data)
        form = newForm
      })()

      setTimeout(() => {
        return res.json(form);
      }, 1000)
    }, 2000)

  } catch (err) {
    return res.json({ err: err.message });
  }
};

  // const template = {
  //   "name": "Arthur",
  //   "storeId": "5152654asds5a",
  //   "questions": [
  //     {
  //       "name": "Question 1",
  //       "options": [
  //         {
  //           "name": "Option 1"
  //         },
  //         {
  //           "name": "Option 2"
  //         },
  //         {
  //           "name": "Option 3"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Question 2",
  //       "options": [
  //         {
  //           "name": "Option 1"
  //         },
  //         {
  //           "name": "Option 2"
  //         },
  //         {
  //           "name": "Option 3"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Question 3",
  //       "options": [
  //         {
  //           "name": "Option 1"
  //         },
  //         {
  //           "name": "Option 2"
  //         },
  //         {
  //           "name": "Option 3"
  //         }
  //       ]
  //     }
  //   ]
  // }