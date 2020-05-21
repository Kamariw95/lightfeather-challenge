from rest_framework import serializers

class EncoderSerializer(serializers.Serializer):
    Shift = serializers.IntegerField()
    Message = serializers.CharField()