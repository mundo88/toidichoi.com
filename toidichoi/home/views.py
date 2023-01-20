from django.shortcuts import render

# Create your views here.
def home(request):
    context = {
        "tags":[{"name":"Tìm kiếm gần đây","icon":'<svg width="20px" height="20px" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" enable-background="new 0 0 512 512" xml:space="preserve"><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <path d="M128,288l256-160L224,384v-96H128z"></path> </g></svg>'},{"name":"#caphe"},{"name":"#homestay"},{"name":"#camping"},{"name":"#khachsan"},{"name":"#nhanghigiare"},{"name":"#anuong"},{"name":"#thuexe"},{"name":"#dacsan"}]
    }
    return render(request,"home.html",context=context)