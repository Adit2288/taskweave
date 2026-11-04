from django.http import JsonResponse


def health_check(request):
    return JsonResponse({
        "project": "TaskWeave",
        "status": "running",
       "message": "Built by Adit"
    })