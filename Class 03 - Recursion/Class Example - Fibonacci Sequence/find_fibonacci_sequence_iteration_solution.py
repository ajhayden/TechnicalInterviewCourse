# Write a program that creates a portion of the fibonacci sequence iteratively

def find_fibonacci_sequence(n):
      if (n == 0):
              return 0
      elif (n == 1):
              return 1
      elif (n > 1):
              fn = 0
              fn1 = 1
              fn2 = 2
              for i in range(3, n):
                      fn = fn1+fn2
                      fn1 = fn2
                      fn2 = fn
              return fn
      else:
              return -1
         
print(find_fibonacci_sequence(7))

def find_fibonacci_sequence_fancy(n):
    a,b = 0,1
    for i in range(n):
        a,b = b,a + b
    return a

print(find_fibonacci_sequence_fancy(7))