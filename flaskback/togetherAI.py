import together

together.api_key = "80be4e8fb01501ef03da738b47663b26700b0e4f84f85d2e3f98b0a9abb3ae75"

def chat(predict, age, sex, bmi, children, smoker, region):

    # age, sex, bmi, children, smoker, region
    if smoker=="Yes":
        smoker = "is a smoker"
    else:
        smoker = "doesn't smokes"

    input = "Given a person's information, age of %s, %s, BMI of %s, with %s children, %s, and lives in %s region of US, use this person's information to explain their health insurance cost. Format your response as a list." %(age, sex, bmi, children, smoker, region)
    output = together.Complete.create(
        prompt = "[INST] %s [/INST]" % (input), 
        model = "togethercomputer/llama-2-13b-chat", 
        max_tokens = 400,
        temperature = 0.1,
        top_k = 40,
        top_p = 0.85,
        repetition_penalty = 1.1,
        stop = ["7", '[INST]', '</s>']
    )

    response = str(output['output']['choices'][0]['text'])
    if response.strip().endswith("7"):
        response = response.strip()[:-1]
    return response
