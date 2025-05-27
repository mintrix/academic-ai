from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()

def analyze(feedback):
    return analyzer.polarity_scores(feedback)
