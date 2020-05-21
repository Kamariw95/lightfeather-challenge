from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .serializers import EncoderSerializer
from server.encoding.encoder import Encoder

# Create your views here.
class EncoderAPIView(APIView): 
    def post(self, request, format=None):
        try:
            serializer = EncoderSerializer(data=request.data)
            if serializer.is_valid():
                encoder = Encoder()
                result = encoder.shift_cipher(serializer.validated_data["Message"], serializer.validated_data["Shift"])

                return Response({"EncodedMessage": result}, status=200, content_type="application/json")
            else:
                raise Exception("Invalid data.")
        except Exception as e:
            return Response({"EncodedMessage":""}, status=500, content_type="application/json")
        
