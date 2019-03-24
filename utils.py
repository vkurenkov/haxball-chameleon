def module_path(filepath: str) -> str:
    for ind in reversed(range(len(filepath))):
        if len(filepath) == 0:
            break
        if filepath[ind] == "/":
            break
        filepath = filepath[:-1]
    return filepath