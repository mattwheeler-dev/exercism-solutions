class TranslationService {
  constructor(api) {
    this.api = api;
  }
// TASK 1
// FETCH TRANSLATION
  free(text) {
    return this.api.fetch(text).then((result) => result.translation);
  }
// TASK 2
// FETCH A BATCH (ALL OR NOTHING) 
  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    };
    return Promise.all(texts.map((text) => this.free(text)));
  }
// TASK 3
// REQUEST TRANSLATION (2 RETRY MAX)
  request(text) {
    const newPromise = () =>
      new Promise((resolve, reject) => {
        this.api.request(text, (result) => {
          result ? reject(result) : resolve();
        });
      });
    return newPromise().catch(newPromise).catch(newPromise);
  }
// TASK 4
// FETCH, REQUEST, AND QUALITY CHECK TRANSLATION
  premium(text, minimumQuality) {
    return this.api
      .fetch(text)
      .catch(() => {
        return this.request(text).then(() => this.api.fetch(text));
      })
      .then((result) => {
        if (result.quality < minimumQuality) {
          throw new QualityThresholdNotMet();
        }
        return result.translation;
      });
  }
}

class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(
      `The translation of ${text} does not meet the requested quality threshold.`.trim(),
    );
    this.text = text;
  }
}

class BatchIsEmpty extends Error {
  constructor() {
    super(
      `Requested a batch translation, but there are no texts in the batch.`.trim(),
    );
  }
}
