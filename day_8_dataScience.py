
def sortArr(arr):
    udahBener = False
    while (not udahBener):
        udahBener = True
        for i in range(len(arr) - 1):
            if (arr[i + 1] > arr[i]):
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                udahBener = False
    return arr

def findMedian(arr):
    if (len(arr) % 2 == 0):
        firstMedianIndex = int(len(arr) / 2)
        secondMedianIndex = int(len(arr) / 2 - 1)
        return (arr[firstMedianIndex] + arr[secondMedianIndex]) / 2
    else:
        return arr[int((len(arr) - 1)  / 2)]

data = [71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69]
print(sortArr(data))
sortedArr = sortArr(data)
print(findMedian(sortedArr))

def findQ3(arr):
    if (len(arr) % 2 == 0):
        endOfIndex = int(len(arr) / 2)
        return findMedian(arr[0:endOfIndex])
    else:
        return findMedian(arr[0:])

def findQ1(arr):
    if (len(arr) % 2 == 0):
        startOfIndex = int(len(arr) / 2)
        return findMedian(arr[startOfIndex:])



print(findQ3(sortedArr))
print(findQ1(sortedArr))
